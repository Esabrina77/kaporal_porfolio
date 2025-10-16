"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import styles from '@/styles/components/3D/GalaxyShape.module.css';

// Fonction pour créer une texture circulaire
function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
  }
  
  return new THREE.CanvasTexture(canvas);
}

interface GalaxyShapeProps {
  className?: string;
}

function Galaxy() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 3000;
  const [isDark, setIsDark] = useState(true);
  
  // Créer la texture circulaire une seule fois
  const circleTexture = useMemo(() => createCircleTexture(), []);

  // Détecter le thème
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme !== 'light');

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setIsDark(currentTheme !== 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);
    const textPositions = new Float32Array(particlesCount * 3);

    // Couleur qui s'adapte au thème : blanc pour mode sombre, noir pour mode clair
    const particleColor = new THREE.Color(isDark ? '#ffffff' : '#000000');

    // Créer les positions pour former "KAPORAL" - PLUS GRAND et PLUS DENSE
    const text = "KAPORAL";
    const letterWidth = 2.5; // Augmenté
    const spacing = 0.8;     // Augmenté
    const totalWidth = text.length * letterWidth + (text.length - 1) * spacing;
    const startX = -totalWidth / 2;

    // Positions des lettres avec BEAUCOUP plus de points pour une meilleure définition
    const letterPatterns: { [key: string]: number[][] } = {
      K: [
        // Barre verticale gauche (0-10 points)
        [0, 0], [0, 0.25], [0, 0.5], [0, 0.75], [0, 1], [0, 1.25], [0, 1.5], [0, 1.75], [0, 2], [0, 2.25], [0, 2.5],
        // Diagonale haute
        [0.3, 1.5], [0.6, 1.75], [0.9, 2], [1.2, 2.25], [1.5, 2.5],
        // Diagonale basse
        [0.3, 1.25], [0.6, 1], [0.9, 0.75], [1.2, 0.5], [1.5, 0.25], [1.5, 0]
      ],
      A: [
        // Barre gauche
        [0, 0], [0.1, 0.5], [0.2, 1], [0.3, 1.5], [0.4, 2], [0.5, 2.5],
        // Barre horizontale milieu
        [0.5, 1.25], [0.75, 1.25], [1, 1.25], [1.25, 1.25],
        // Barre droite
        [1.5, 0], [1.4, 0.5], [1.3, 1], [1.2, 1.5], [1.1, 2], [1, 2.5],
        // Top
        [0.6, 2.5], [0.75, 2.5], [0.9, 2.5]
      ],
      P: [
        // Barre verticale
        [0, 0], [0, 0.5], [0, 1], [0, 1.5], [0, 2], [0, 2.5],
        // Courbe haute
        [0.3, 2.5], [0.6, 2.5], [0.9, 2.5], [1.2, 2.5],
        [1.5, 2.25], [1.5, 2], [1.5, 1.75],
        [1.2, 1.5], [0.9, 1.5], [0.6, 1.5], [0.3, 1.5]
      ],
      O: [
        // Barre gauche
        [0, 0.5], [0, 1], [0, 1.5], [0, 2],
        // Top
        [0.3, 2.5], [0.6, 2.5], [0.9, 2.5], [1.2, 2.5],
        // Barre droite
        [1.5, 0.5], [1.5, 1], [1.5, 1.5], [1.5, 2],
        // Bottom
        [0.3, 0], [0.6, 0], [0.9, 0], [1.2, 0]
      ],
      R: [
        // Barre verticale
        [0, 0], [0, 0.5], [0, 1], [0, 1.5], [0, 2], [0, 2.5],
        // Courbe haute
        [0.3, 2.5], [0.6, 2.5], [0.9, 2.5], [1.2, 2.5],
        [1.5, 2.25], [1.5, 2], [1.5, 1.75],
        [1.2, 1.5], [0.9, 1.5], [0.6, 1.5], [0.3, 1.5],
        // Jambe
        [0.6, 1], [0.9, 0.5], [1.2, 0.25], [1.5, 0]
      ],
      L: [
        // Barre verticale
        [0, 0], [0, 0.5], [0, 1], [0, 1.5], [0, 2], [0, 2.5],
        // Barre horizontale bas
        [0.3, 0], [0.6, 0], [0.9, 0], [1.2, 0], [1.5, 0]
      ]
    };

    const textPoints: number[][] = [];

    // Générer tous les points pour le texte avec échelle agrandie et alignement parfait dans le plan X
    text.split('').forEach((letter, letterIndex) => {
      const pattern = letterPatterns[letter];
      if (pattern) {
        const offsetX = startX + letterIndex * (letterWidth + spacing);
        pattern.forEach(([x, y]) => {
          // Multiplier par 1.5 pour agrandir encore plus et Z=0 pour alignement parfait dans le plan X
          textPoints.push([offsetX + x * 1.5, (y - 1.25) * 1.5, 0]);
        });
      }
    });

    // Répliquer les points pour avoir assez de particules avec moins de spread
    const replicatedTextPoints: number[][] = [];
    for (let i = 0; i < particlesCount; i++) {
      const basePoint = textPoints[i % textPoints.length];
      const spread = 0.05; // Réduit pour des lettres plus nettes
      replicatedTextPoints.push([
        basePoint[0] + (Math.random() - 0.5) * spread,
        basePoint[1] + (Math.random() - 0.5) * spread,
        basePoint[2] + (Math.random() - 0.5) * spread
      ]);
    }

    for (let i = 0; i < particlesCount; i++) {
      // Position spirale galactique originale
      const radius = Math.random() * 8;
      const spinAngle = radius * 3;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;

      originalPositions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      originalPositions[i * 3 + 1] = randomY;
      originalPositions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      positions[i * 3] = originalPositions[i * 3];
      positions[i * 3 + 1] = originalPositions[i * 3 + 1];
      positions[i * 3 + 2] = originalPositions[i * 3 + 2];

      // Position pour former le texte
      textPositions[i * 3] = replicatedTextPoints[i][0];
      textPositions[i * 3 + 1] = replicatedTextPoints[i][1];
      textPositions[i * 3 + 2] = replicatedTextPoints[i][2];

      // Couleur uniforme pour s'adapter au thème
      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }

    return { positions, colors, originalPositions, textPositions };
  }, [isDark, particlesCount]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Cycle de 75 secondes : 15s KAPORAL → 15s rotation → 15s zoom in → 15s zoom out → 15s voyage X
      const cycleDuration = 75;
      const cycleTime = time % cycleDuration;
      
      // Rotation principale avec transition fluide
      if (cycleTime < 15) {
        // Pendant KAPORAL, rotation stable
        groupRef.current.rotation.y = 0;
        groupRef.current.rotation.x = 0;
      } else {
        // Transition fluide vers la rotation après l'explosion - VITESSE RÉDUITE
        const rotationStartTime = 15;
        const rotationProgress = Math.min((cycleTime - rotationStartTime) / 1, 1); // Transition sur 1s
        
        // Rotation progressive qui s'accélère - VITESSE BEAUCOUP PLUS LENTE
        const rotationSpeed = rotationProgress * 0.05; // Réduit de 0.2 à 0.05 (4x plus lent)
        groupRef.current.rotation.y = (time - rotationStartTime) * rotationSpeed;
        groupRef.current.rotation.x = Math.sin((time - rotationStartTime) * 0.3) * 0.05 * rotationProgress; // Réduit aussi
      }
      
      // Animation de la caméra avec transitions fluides
      const camera = state.camera;
      
      if (cycleTime < 15) {
        // Phase 1: Formation du texte "KAPORAL" puis explosion (15s) - EN PREMIER !
        const progress = cycleTime / 15; // 0 à 1
        
        if (pointsRef.current) {
          // Subdivisions: 0-0.5 = assemblage, 0.5-1.0 = explosion DIRECTE (pas de pause)
          const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
          
          if (progress < 0.5) {
            // Assemblage des particules en texte (7.5s)
            const assembleProgress = progress / 0.5;
            const easeAssemble = assembleProgress < 0.5
              ? 4 * assembleProgress * assembleProgress * assembleProgress
              : 1 - Math.pow(-2 * assembleProgress + 2, 3) / 2;
            
            for (let i = 0; i < particlesCount; i++) {
              positionArray[i * 3] += (particles.textPositions[i * 3] - positionArray[i * 3]) * easeAssemble * 0.15;
              positionArray[i * 3 + 1] += (particles.textPositions[i * 3 + 1] - positionArray[i * 3 + 1]) * easeAssemble * 0.15;
              positionArray[i * 3 + 2] += (particles.textPositions[i * 3 + 2] - positionArray[i * 3 + 2]) * easeAssemble * 0.15;
            }
            
            // Caméra se positionne pour voir le texte
            const targetCamZ = 20;
            const targetCamY = 0;
            const targetCamX = 0;
            camera.position.z += (targetCamZ - camera.position.z) * 0.1;
            camera.position.y += (targetCamY - camera.position.y) * 0.1;
            camera.position.x += (targetCamX - camera.position.x) * 0.1;
            camera.rotation.y += (0 - camera.rotation.y) * 0.1;
            camera.rotation.z += (0 - camera.rotation.z) * 0.1;
            
          } else {
            // Explosion DIRECTE et transition vers mouvement 2 (7.5s)
            const explodeProgress = (progress - 0.5) / 0.5;
            const easeExplode = explodeProgress < 0.5
              ? 4 * explodeProgress * explodeProgress * explodeProgress
              : 1 - Math.pow(-2 * explodeProgress + 2, 3) / 2;
            
            for (let i = 0; i < particlesCount; i++) {
              positionArray[i * 3] += (particles.originalPositions[i * 3] - positionArray[i * 3]) * easeExplode * 0.3; // Plus rapide
              positionArray[i * 3 + 1] += (particles.originalPositions[i * 3 + 1] - positionArray[i * 3 + 1]) * easeExplode * 0.3;
              positionArray[i * 3 + 2] += (particles.originalPositions[i * 3 + 2] - positionArray[i * 3 + 2]) * easeExplode * 0.3;
            }
            
            // Caméra transition DIRECTE vers la position du mouvement 2 (zoom in)
            const targetCamZ = 8 - explodeProgress * 16; // Transition directe vers zoom in
            const targetCamY = 3 + Math.sin(explodeProgress * Math.PI * 3) * 3;
            const targetCamX = Math.cos(explodeProgress * Math.PI * 4) * 3;
            
            camera.position.z += (targetCamZ - camera.position.z) * 0.12; // Plus rapide
            camera.position.y += (targetCamY - camera.position.y) * 0.12;
            camera.position.x += (targetCamX - camera.position.x) * 0.12;
            camera.rotation.y += (0 - camera.rotation.y) * 0.12;
            camera.rotation.z = Math.sin(explodeProgress * Math.PI * 2) * 0.3; // Transition vers rotation caméra
          }
          
          pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
      } else if (cycleTime < 30) {
        // Phase 2: Zoom avant - CONTINUATION du mouvement depuis l'explosion (15s)
        const progress = (cycleTime - 15) / 15; // 0 à 1
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress // easeInCubic pour accélération
          : 1 - Math.pow(-2 * progress + 2, 3) / 2; // easeOutCubic pour décélération
        
        // CONTINUATION du zoom depuis la transition de l'explosion
        const targetZ = 8 - easeProgress * 16; // De 8 à -8 (traverse complètement)
        const targetY = 3 + Math.sin(progress * Math.PI * 3) * 3; // Mouvement ondulant
        const targetX = Math.cos(progress * Math.PI * 4) * 3; // Mouvement spiral
        
        camera.position.z += (targetZ - camera.position.z) * 0.08;
        camera.position.y += (targetY - camera.position.y) * 0.08;
        camera.position.x += (targetX - camera.position.x) * 0.08;
        
        // Rotation de la caméra pour l'effet de vertige/voyage spatial
        camera.rotation.z = Math.sin(progress * Math.PI * 2) * 0.3;
        camera.rotation.y += (0 - camera.rotation.y) * 0.08; // Plus fluide
      } else if (cycleTime < 45) {
        // Phase 3: Zoom arrière - retour à la vue d'ensemble (15s)
        const progress = (cycleTime - 30) / 15; // 0 à 1
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        // Retour depuis l'intérieur de la galaxie
        const targetZ = -8 + easeProgress * 16; // De -8 à 8
        const targetY = 3 + Math.sin((1 - progress) * Math.PI * 3) * 3; // Retour ondulant
        const targetX = Math.cos((1 - progress) * Math.PI * 4) * 3; // Retour spiral
        
        camera.position.z += (targetZ - camera.position.z) * 0.08;
        camera.position.y += (targetY - camera.position.y) * 0.08;
        camera.position.x += (targetX - camera.position.x) * 0.08;
        
        // Retour progressif de la rotation
        camera.rotation.z += (0 - camera.rotation.z) * 0.08;
        camera.rotation.y += (0 - camera.rotation.y) * 0.08; // Plus fluide
      } else if (cycleTime < 60) {
        // Phase 4: Voyage latéral sur l'axe X - ENTRE les particules (15s)
        const progress = (cycleTime - 45) / 15; // 0 à 1
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        // Voyage latéral de gauche à droite à travers la galaxie
        const targetX = -10 + easeProgress * 20; // De -10 à +10 (traverse horizontalement)
        const targetZ = 2 + Math.sin(progress * Math.PI * 2) * 2; // Ondulation Z pour éviter collisions
        const targetY = 3 + Math.cos(progress * Math.PI * 3) * 2; // Ondulation Y pour plus de mouvement
        
        camera.position.x += (targetX - camera.position.x) * 0.08;
        camera.position.z += (targetZ - camera.position.z) * 0.08;
        camera.position.y += (targetY - camera.position.y) * 0.08;
        
        // Rotation de la caméra pour regarder dans la direction du mouvement
        const targetRotationY = Math.PI / 2 + Math.sin(progress * Math.PI) * 0.3;
        camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.05;
        camera.rotation.z = Math.cos(progress * Math.PI * 2) * 0.2;
      } else {
        // Phase 5: Voyage latéral sur l'axe X - ENTRE les particules (15s) - DERNIÈRE PHASE
        const progress = (cycleTime - 60) / 15; // 0 à 1
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        // Voyage latéral de gauche à droite à travers la galaxie
        const targetX = -10 + easeProgress * 20; // De -10 à +10 (traverse horizontalement)
        const targetZ = 2 + Math.sin(progress * Math.PI * 2) * 2; // Ondulation Z pour éviter collisions
        const targetY = 3 + Math.cos(progress * Math.PI * 3) * 2; // Ondulation Y pour plus de mouvement
        
        camera.position.x += (targetX - camera.position.x) * 0.08;
        camera.position.z += (targetZ - camera.position.z) * 0.08;
        camera.position.y += (targetY - camera.position.y) * 0.08;
        
        // Rotation de la caméra pour regarder dans la direction du mouvement
        const targetRotationY = Math.PI / 2 + Math.sin(progress * Math.PI) * 0.3;
        camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.08; // Plus fluide
        camera.rotation.z = Math.cos(progress * Math.PI * 2) * 0.2;
      }
      
      // La caméra regarde toujours le centre pour l'effet tunnel (sauf phases 4 et 5)
      if (cycleTime < 45 || (cycleTime >= 60 && cycleTime < 75)) {
        camera.lookAt(0, 0, 0);
      }
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesCount}
              array={particles.positions}
              itemSize={3}
              args={[particles.positions, 3]}
            />
            <bufferAttribute
              attach="attributes-color"
              count={particlesCount}
              array={particles.colors}
              itemSize={3}
              args={[particles.colors, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
            vertexColors={true}
            transparent={true}
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            map={circleTexture}
            alphaMap={circleTexture}
          />
        </points>
      </group>
    </Float>
  );
}

export default function GalaxyShape({ className = "" }: GalaxyShapeProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Canvas
        camera={{ position: [0, 3, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <Galaxy />
      </Canvas>
    </div>
  );
}


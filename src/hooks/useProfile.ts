"use client";
import { useMemo } from 'react';
import profileData from '@/data/profile.json';
import { Profile } from '@/types/profile';

export function useProfile(): Profile {
  const profile = useMemo(() => {
    return profileData as Profile;
  }, []);

  return profile;
}

export function usePersonalInfo() {
  const profile = useProfile();
  return profile.personal;
}

export function useExperience() {
  const profile = useProfile();
  return profile.experience || [];
}

export function useEducation() {
  const profile = useProfile();
  return profile.education || [];
}

export function useSkills() {
  const profile = useProfile();
  return profile.skills;
}

export function useLanguages() {
  const profile = useProfile();
  return profile.languages || [];
}

export function useEntrepreneurial() {
  const profile = useProfile();
  return profile.entrepreneurial;
}

export function createUser(overrides){
  overrides = overrides || {};
  return Object.assign({
    id: null,
    nickname: '',
    displayName: '',
    email: '',
    avatarUrl: null,
    bio: '',
    country: '',
    professionalRole: '',
    expertise: [],
    role: 'guest',
    verifiedExpert: false,
    reputation: 0,
    badges: [],
    joinedAt: new Date().toISOString(),
    followersCount: 0,
    followingCount: 0,
    profileComplete: false,
    preferences: { emailDigest: true, density: 'comfortable' },
    notificationSettings: { replies: true, mentions: true, follows: true, admin: true },
    privacySettings: { showEmail: false, showCountry: true },
  }, overrides);
}

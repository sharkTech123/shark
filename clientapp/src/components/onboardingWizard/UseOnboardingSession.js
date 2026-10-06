import { useEffect, useState } from 'react';

const STORAGE_KEY = 'onboarding_wizard_seen_v1';

/**
 * Controls first-visit behaviour.
 * - sessionStorage: popup reappears each new browser session (tab close/reopen).
 * - Swap to localStorage below if you want "only ever once per device" instead.
 */
export function useOnboardingSession() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    try {
      const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
      if (!alreadySeen) {
        setShouldShow(true);
      }
    } catch {
      // Storage may be blocked (private mode / disabled cookies) — fail open
      // and just show the wizard rather than crash the page.
      setShouldShow(true);
    }
  }, []);

  const markSeen = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* ignore storage errors */
    }
    setShouldShow(false);
  };

  return { shouldShow, markSeen };
}
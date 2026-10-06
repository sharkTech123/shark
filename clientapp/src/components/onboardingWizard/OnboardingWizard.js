import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchOnboardingNodes } from '../../service/onboardingService';
import { useOnboardingSession } from './UseOnboardingSession';
import { iconForType, gradientForIndex } from './Icons';
import styles from './OnboardingWizard.module.css';

// Lightweight 3D tilt on hover — pure CSS custom properties updated on
// mousemove, no animation library needed.
function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty('--tiltX', `${(-y * 8).toFixed(2)}deg`);
  card.style.setProperty('--tiltY', `${(x * 8).toFixed(2)}deg`);
}

function resetTilt(e) {
  const card = e.currentTarget;
  card.style.setProperty('--tiltX', '0deg');
  card.style.setProperty('--tiltY', '0deg');
}

/**
 * First-load popup that walks the user through:
 *   "What do you want to do?" -> category -> ... -> quiz/product page
 *
 * Each step lazy-loads only its own options from the backend, and every
 * redirect comes from the server response (never constructed on the client),
 * so there's no way to manipulate the popup into navigating somewhere unsafe.
 */
export default function OnboardingWizard() {
  const { shouldShow, markSeen } = useOnboardingSession();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState([]); // breadcrumb trail: [{ id, label }]
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dialogRef = useRef(null);

  const currentParentId = path.length ? path[path.length - 1].id : null;

  const loadOptions = useCallback(async (parentId) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchOnboardingNodes(parentId);
      setOptions(data);
    } catch (err) {
      setError('Something went wrong loading options. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Open automatically on first visit.
  useEffect(() => {
    if (shouldShow) {
      setIsOpen(true);
      loadOptions(null);
    }
  }, [shouldShow, loadOptions]);

  // Basic focus handling + ESC to close.
  useEffect(() => {
    if (!isOpen) return undefined;

    dialogRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    markSeen();
  };

  const handleSelect = (option) => {
    if (option.isLeaf) {
      markSeen();
      setIsOpen(false);
      // redirectPath comes only from our own validated API response.
      navigate(option.redirectPath);
      return;
    }

    setPath((prev) => [...prev, { id: option.id, label: option.label }]);
    loadOptions(option.id);
  };

  const handleBack = () => {
    const newPath = path.slice(0, -1);
    setPath(newPath);
    loadOptions(newPath.length ? newPath[newPath.length - 1].id : null);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={handleClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="onboarding-wizard-title"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()} // don't close when clicking inside
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 id="onboarding-wizard-title" className={styles.title}>
          {path.length === 0
            ? 'What would you like to do?'
            : path[path.length - 1].label}
        </h2>

        {isLoading && <div className={styles.loading}>Loading options…</div>}

        {error && (
          <div className={styles.error}>
            {error}
            <button
              type="button"
              className={styles.retryBtn}
              onClick={() => loadOptions(currentParentId)}
            >
              Retry
            </button>
          </div>
        )}

        {!isLoading && !error && (
          <ul className={styles.optionList}>
            {options.map((option, index) => {
              const Icon = iconForType(option.type);
              const gradient = gradientForIndex(index);
              return (
                <li
                  key={option.id}
                  style={{ '--i': index }}
                  className={styles.optionItem}
                >
                  <button
                    type="button"
                    className={styles.optionBtn}
                    onClick={() => handleSelect(option)}
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                  >
                    <span className={`${styles.iconBadge} ${styles[gradient]}`}>
                      <Icon className={styles.icon} />
                    </span>
                    <span className={styles.optionLabel}>{option.label}</span>
                    <span className={styles.chevron}>
                      {option.isLeaf ? '→' : '›'}
                    </span>
                  </button>
                </li>
              );
            })}

            {!isLoading && !error && options.length === 0 && (
              <li className={styles.empty}>No options available right now.</li>
            )}
          </ul>
        )}

        <div className={styles.footer}>
          {path.length > 0 && (
            <button type="button" className={styles.backBtn} onClick={handleBack}>
              ← Back
            </button>
          )}
          <button type="button" className={styles.skipBtn} onClick={handleClose}>
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
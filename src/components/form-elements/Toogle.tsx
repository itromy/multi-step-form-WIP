import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import styles from './Toogle.module.css';

export type ToggleProps = {
  name: string;
  value1: string;
  value2: string;
  label1: string;
  label2: string;
  selected: string;
  onChange: (values: { name: string; value: string }) => void; // Typ verfeinert
};

export default function Toggle({
  name,
  value1,
  label1,
  value2,
  label2,
  selected,
  onChange,
}: ToggleProps) {
  // Stabile ID generieren
  const id = useRef(uuidv4());

  function isChecked(value: string) {
    return value === selected;
  }

  function handleOnChange(value: string) {
    onChange({
      name,
      value,
    });
  }

  function handleOnClick() {
    if (selected === value1) {
      handleOnChange(value2);
    } else {
      handleOnChange(value1);
    }
  }

  return (
    <div className={styles.component}>
      {/* left option */}
      <span className={styles.left}>
        <input
          id={`left-${id.current}`}
          onChange={() => handleOnChange(value1)}
          className={`${styles.input} visually-hidden`}
          type="radio"
          value={value1}
          name={name}
          checked={isChecked(value1)}
        />
        <label className={styles.label} htmlFor={`left-${id.current}`}>
          {label1}
        </label>
      </span>

      {/* right option*/}
      <span className={styles.right}>
        <input
          id={`right-${id.current}`}
          onChange={() => handleOnChange(value2)}
          className={`${styles.input} visually-hidden`}
          type="radio"
          value={value2}
          name={name}
          checked={isChecked(value2)}
        />
        <label className={styles.label} htmlFor={`right-${id.current}`}>
          {label2}
        </label>
      </span>

      {/* control */}
      <span className={`${styles.control} ${isChecked(value2) ? styles.controlRight : ''}`}>
        <button
          onClick={handleOnClick}
          className={styles.knob}
          aria-pressed={selected === value1 ? 'true' : 'false'}
        />
      </span>
    </div>
  );
}

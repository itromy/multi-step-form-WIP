import styles from './TextInput.module.css';

export type TextInputProps = {
    value: string;
    name: string;
    label: string;
    placeholder?: string;
    error?: string;
    onChange: ({ name, value }: { name: string; value: string }) => void; // Typ angepasst
}

export default function TextInput({ value, name, label, placeholder, error, onChange }: TextInputProps) {
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange({
            name: name,
            value: event.target.value,
        });
    }

    function renderLabel() {
        return <span className={styles.label}>{label}</span>;
    }

    function renderError() {
        if (!error) {
            return;
        }

        return (
            <span className={styles.errorText}>
                {error}
            </span>
        );
    }

    function renderInput() {
        return (
            <input
                onChange={handleOnChange}
                className={`${styles.input} ${error ? styles.error : ''}`}
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
            />
        );
    }

    return (
        <div className={styles.component}>
            <label>
                {renderLabel()}
                {renderError()}
                {renderInput()}
            </label>
        </div>
    );
}

import React from "react";
import styles from './UserData.module.css';
// Use Vite's `?url` import to get a string URL for the asset at runtime.
import calendarIcon from '../../assets/icons/calendar.svg?url';
import mailIcon from '../../assets/icons/mail.svg?url';

/**
 * StammdatenCard – zeigt Stammdaten in einem kompakten, zweispaltigen Layout an.
 *
 * Beispiel:
 * <StammdatenCard
 *   name="Max Mustermann"
 *   fallnummer="2023-1234567"
 *   schadensart="Wasserschaden"
 *   schadenstag={new Date(2023, 5, 10)}
 *   kontakt="mail@maxmustermann.de"
 * />
 */

export type StammdatenProps = {
  name: string;
  fallnummer: string;
  schadensart: string;
  schadenstag: string | Date; // akzeptiert "10.06.2023" oder ein Date-Objekt
  kontakt?: string;
  className?: string;
};

function formatDate(value: string | Date) {
  if (value instanceof Date) {
    const d = value;
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  }
  return value; // angenommen bereits im richtigen Format
}

function Field({ label, value, icon }: { label: string; value?: React.ReactNode; icon?: string }) {
  if (value === undefined || value === null || value === "") return null;
  return (
    <div className={styles.field}>
      {icon ? <img src={icon} alt="" className={styles.icon} /> : null}
      <div>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
}

export function StammdatenCard({
  name,
  fallnummer,
  schadensart,
  schadenstag,
  kontakt,
  className,
}: StammdatenProps) {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <div className={styles.headerBar}>
        <div className="headingRow">
          <div className="headingTitle"><h4>Stammdaten</h4></div>
          <div className="headingSub">Claim # {fallnummer}</div>
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <div className={styles.personName}>{name} <span style={{marginLeft:12, fontWeight:600}} className="semiBold"></span></div>
          <div className={styles.personSubtitle}>{schadensart}</div>
        </div>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaItemLabel}><img src={calendarIcon} className={styles.icon} alt="calendar"/> <div>Submission Date</div></div>
            <div className={styles.metaItemValue}>{formatDate(schadenstag)}</div>
          </div>

          <div>
            <div className={styles.metaItemLabel}><img src={calendarIcon} className={styles.icon} alt="calendar"/> <div>Estimated Completion</div></div>
            <div className={styles.metaItemValue}>—</div>
          </div>

          <div>
            <div className={styles.metaItemLabel}><img src={mailIcon} className={styles.icon} alt="user"/> <div>Assigned To</div></div>
            <div className={styles.metaItemValue}>—</div>
          </div>

          <div>
            <div className={styles.metaItemLabel}><img src={mailIcon} className={styles.icon} alt="mail"/> <div>Contact Email</div></div>
            <div className={styles.metaItemValue}>{kontakt ?? '—'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Provide a lightweight compound component `UserData` so pages can use
// `<UserData><UserData.Body>...</UserData.Body></UserData>` similar to `Card`
// Define a typed compound component so callers can use `UserData.Body` without TS errors
type UserDataBodyProps = { children?: React.ReactNode };
type UserDataComponent = React.FC<UserDataBodyProps> & {
  Body: React.FC<UserDataBodyProps>;
};

const UserData: UserDataComponent = (({ children }: UserDataBodyProps) => {
  return <section className={styles.container}>{children}</section>;
}) as UserDataComponent;

const Body: React.FC<UserDataBodyProps> = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

UserData.Body = Body;

export { UserData };

// --- Optional: kleine Demo-Komponente zum direkten Testen ---
export function Demo() {
  return (
    <div className="min-h-screen bg-neutral-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <StammdatenCard
          name="Max Mustermann"
          fallnummer="2023-1234567"
          schadensart="Wasserschaden"
          schadenstag="10.06.2023"
          kontakt="mail@maxmustermann.de"
        />
      </div>
    </div>
  );
}

// re-export a convenient name used in pages
export const Stammdaten = StammdatenCard;

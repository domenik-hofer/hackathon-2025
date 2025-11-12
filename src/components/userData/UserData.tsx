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
  schadensbeschreibung?: string;
  schadenstag: string | Date; // akzeptiert "10.06.2023" oder ein Date-Objekt
  estimatedCompletion?: string | Date; // geschätztes Abschlussdatum
  assignedTo?: string; // zugewiesener Sachbearbeiter
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

export function StammdatenCard({
  name,
  fallnummer,
  schadensart,
  schadensbeschreibung,
  schadenstag,
  estimatedCompletion,
  assignedTo,
  kontakt,
  className,
}: StammdatenProps) {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <div className={styles.headerBar}>
        <div className="headingRow">
          <div className="headingTitle"><h5>Ihr Schadenfall: #1234567/0001</h5></div>
        </div>
      </div>

      <div className={styles.content}>




        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaItemLabel}> <div>Versicherungsnehmer</div></div>
            <div className={styles.metaItemValue}>Beat Schweizer</div>
          </div>

          <div>
            <div className={styles.metaItemLabel}> <div>Schadenereignis</div></div>
            <div className={styles.metaItemValue}>Leitungsbruch vom 01. Oktober 2025</div>
          </div>

          <div>
            <div className={styles.metaItemLabel}> <div>Schadenort</div></div>
            <div className={styles.metaItemValue}>Pionierstr. 33, 8400 Winterthur, Whg. 3.OG</div>
          </div>

            <div className={styles.contact}>
                <div className={styles.title}>
                    Team Schadenservice
                </div>
                <div className={styles.phone}>
                    0800 234 56 78
                </div>
                <div className={styles.mail}>
                    schaden@axa.ch
                </div>
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

// re-export a convenient name used in pages
export const Stammdaten = StammdatenCard;

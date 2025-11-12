import React from "react";

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

function Field({ label, value }: { label: string; value?: React.ReactNode }) {
  if (value === undefined || value === null || value === "") return null;
  return (
    <div className="space-y-1">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="font-medium tracking-tight">{value}</div>
    </div>
  );
}

export default function StammdatenCard({
  name,
  fallnummer,
  schadensart,
  schadenstag,
  kontakt,
  className,
}: StammdatenProps) {
  return (
    <div className={
      "w-full rounded-2xl border bg-white/60 shadow-sm backdrop-blur p-6 md:p-8 " +
      (className ?? "")
    }>
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Stammdaten</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <Field label="Name" value={name} />
        <Field label="Fallnummer" value={fallnummer} />
        <Field label="Schadensart" value={schadensart} />
        <Field label="Schadenstag" value={formatDate(schadenstag)} />
        <Field label="Kontakt" value={kontakt} />
      </div>
    </div>
  );
}

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

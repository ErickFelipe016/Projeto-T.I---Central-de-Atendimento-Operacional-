'use client';

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="shell">
      <section className="card" role="alert">
        <p className="eyebrow">
          Erro inesperado
        </p>

        <h1>
          Não foi possível carregar esta página.
        </h1>

        <p>
          Tente novamente. Se o problema continuar, registre o horário
          e o caminho acessado.
        </p>

        <button type="button" onClick={() => reset()}>
          Tentar novamente
        </button>
      </section>
    </main>
  );
}



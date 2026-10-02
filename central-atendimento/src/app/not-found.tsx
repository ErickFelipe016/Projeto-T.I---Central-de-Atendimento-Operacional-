import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">Erro 404</p>

        <h1>Página não encontrada</h1>

        <p>
          O endereço acessado não corresponde a uma página disponível.
        </p>

        <Link href="/">
          Voltar ao início
        </Link>
      </section>
    </main>
  );
}

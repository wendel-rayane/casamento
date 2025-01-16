import { useEffect, useState } from 'react';
import './contador.css';

const Contador = () => {
  const dataInicial = new Date('2020-12-01T00:00:00').getTime();
  const [tempoStamp, setTempoStamp] = useState<number>(
    Date.now() - dataInicial,
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoStamp(Date.now() - dataInicial);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [dataInicial]);

  const formatarTempo = (milisegundos: number) => {
    const segundos = Math.floor((milisegundos / 1000) % 60);
    const minutos = Math.floor((milisegundos / (1000 * 60)) % 60);
    const horas = Math.floor((milisegundos / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(milisegundos / (1000 * 60 * 60 * 24));

    return (
      <div className="dias">
        <div>
          <span className="detalhe">{dias}</span>
          <p>dias</p>
        </div>
        <div>
          <span className="detalhe">{horas}</span>
          <p>horas</p>
        </div>
        <div>
          <span className="detalhe">{minutos}</span>
          <p>minutos</p>
        </div>
        <div>
          <span className="detalhe">{segundos}</span>
          <p>segundos</p>
        </div>
      </div>
    );
  };

  return (
    <span
      style={{
        marginTop: '5rem',
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
    >
      Já se passaram{' '}
      <div style={{ marginTop: '1rem' }}>{formatarTempo(tempoStamp)}</div>
    </span>
  );
};

export default Contador;

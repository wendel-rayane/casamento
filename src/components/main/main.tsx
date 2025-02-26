import './main.css';
import Clipboard from 'clipboard';
import { useEffect, useRef } from 'react';
import Contador from '../contador/contador';
import casal from '/src/assets/casal.jpeg';
import qrcode from '/src/assets/qr-code.jpeg';

function Main() {
  const chaveToCopy =
    '00020126580014BR.GOV.BCB.PIX01361af825c9-b826-47d4-ae2d-62f3546d9db05204000053039865802BR5924Wendel da Silva de Souza6009SAO PAULO62140510u8ntm3Z90h6304B100';
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new Clipboard(buttonRef.current, {
        text: () => chaveToCopy,
      });

      clipboard.on('success', () => {
        alert('Chave aleatória copiada com sucesso!');
      });

      clipboard.on('error', (e) => {
        console.error('Falha ao copiar chave aleatória', e);
      });

      return () => {
        clipboard.destroy();
      };
    }
  }, [chaveToCopy]);
  return (
    <>
      <main className="container">
        <Contador />
        <h1>Sejam bem-vindos!</h1>
        <p>Saiba mais sobre nosso casamento navegando pelo site.</p>
        <img
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/sakura.png"
          alt="sakura"
        />

        <section className="historia container" id="historia">
          <h1>Nossa história</h1>

          <p>
            Aqui vamos contar a vocês, queridos amigos e familiares, os momentos
            mais marcantes da nossa história de amor. A contagem regressiva
            começa, o frio na barriga e toda a ansiedade do dia mais esperado de
            nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos
            juntos nesse grande sonho, o dia em que uniremos nossas almas e
            corpos para sempre, o dia do nosso casamento.
          </p>
          <p>
            Quando nos conhecemos, nem imaginávamos que um dia tudo isso
            acabaria como um final de conto de fadas, com a realização do nosso
            grande sonho: o casamento! O coração aperta, o dia está chegando, e
            começa a passar um filme de tudo o que passamos para chegar até
            aqui. E como é bom relembrar cada pedacinho da nossa história de
            amor.
          </p>

          <img src={casal} alt="Casal" width={350} />
        </section>

        <section className="carinho container" id="carinho">
          <h1>Mensagem de carinho</h1>
          <p>
            Palavras são carinhos doados. Obrigado por nos dar o seu carinho.
            Iremos lembrar para sempre deste momento tão esperado.
          </p>
          <p>Nos envie uma mensagem de carinho pelo WhatsApp.</p>
          <a href="https://wa.me/5521973187318">Enviar sua mensagem.</a>
        </section>

        <section className="pix container" id="pix">
          <h1>Nosso pix</h1>
          <p>Contribua com o valor que sentir no coração ❤️</p>
          <p>
            Valor mais doado: <span className="detalhe-valor">R$ 200,00</span>
          </p>
          <p>QR Code abaixo:</p>
          <img src={qrcode} alt="Pix" width={200} height={200} />
          <p className="chave">Ou chave aleatoria:</p>
          <button ref={buttonRef} data-clipboard-text={chaveToCopy}>
            Clique aqui para copiar Chave Aleatória
          </button>
        </section>
      </main>
    </>
  );
}

export default Main;

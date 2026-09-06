// Narrative for the page. The prose lives here (not story.md) so it renders as
// plain JSX; story.md was only the original sketch.

function Story() {
  return (
    <article className="story">
      <h1 className="title"> ✦ Arcano personal ✦ </h1>

      <p>
        En el tarot, los <strong>Arcanos Mayores</strong> son un conjunto de 22
        cartas que representan grandes arquetipos, experiencias y etapas de la
        vida: figuras tan conocidas como <strong>El Mago</strong>,{' '}
        <strong>La Emperatriz</strong>, <strong>Los Enamorados</strong>,{' '}
        <strong>La Muerte</strong>, <strong>El Sol</strong> o{' '}
        <strong>El Mundo</strong>. A diferencia de los Arcanos Menores, más
        ligados a lo cotidiano, los Mayores se leen como símbolos de procesos,
        aprendizajes y transformaciones importantes.
      </p>

      <p>
        En numerología aplicada al tarot se llama <strong>arcano personal</strong>{' '}
        al Arcano Mayor que se obtiene a partir de la fecha de nacimiento. Hay
        varias formas de calcularlo; aquí usamos el método que suma por separado
        cada dígito de la fecha y reduce el resultado hasta caer en el rango de
        los 22 Arcanos Mayores.
      </p>

      <p>
        Por ejemplo, para alguien nacido el <strong>14 de septiembre de 1992</strong>:
      </p>

      <p className="formula">1 + 4 + 0 + 9 + 1 + 9 + 9 + 2 = 35</p>

      <p>Como 35 se sale del rango, volvemos a sumar sus dígitos:</p>

      <p className="formula">3 + 5 = 8</p>

      <p>
        El arcano personal es, entonces, el <strong>Arcano VIII</strong>.
      </p>

      <p>
        Según la tradición o el mazo, la numeración de algunas cartas cambia
        —sobre todo <strong>La Justicia</strong> y <strong>La Fuerza</strong>—,
        así que conviene indicar qué sistema se sigue. Con <strong>El Loco</strong>{' '}
        pasa algo parecido: puede ir numerado como 0 o asociarse al 22. Aquí lo
        tomamos como 22.
      </p>

      <h1 className="title"> ✦ ¿Cómo distribuyen? ✦ </h1>

      <p>
        Una pregunta que surge sola es: ¿cómo se reparten los arcanos a lo largo
        de un rango de fechas? Para responderla basta tomar ese rango, calcular
        el arcano de cada día y mirar la distribución resultante.
      </p>

      <p>
        ¿Crees que todos los arcanos tienen la misma probabilidad de salir?
        Difícilmente. Las fechas suelen escribirse como <code>dd-mm-aaaa</code>,
        es decir, 8 dígitos. Además, no todos los campos tienen el mismo rango:
        hay a lo más 31 días en un mes y 12 meses en el año. Con solo 8 dígitos,
        la suma nunca pasa de 72. Todo esto introduce sesgos.
      </p>

      <p>
        A continuación puedes ver cómo se distribuyen los arcanos entre dos
        fechas cualesquiera:
      </p>
    </article>
  )
}

export default Story

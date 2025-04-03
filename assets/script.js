const inputBuscar = document.querySelector("input");
const buttonPesquisar = document.querySelector(".btn-buscar");
const resultado = document.querySelector("p");

const estadosBrasil = [
  { estado: "Acre", capital: "Rio Branco" },
  { estado: "Alagoas", capital: "Maceió" },
  { estado: "Amapá", capital: "Macapá" },
  { estado: "Amazonas", capital: "Manaus" },
  { estado: "Bahia", capital: "Salvador" },
  { estado: "Ceará", capital: "Fortaleza" },
  { estado: "Distrito Federal", capital: "Brasília" },
  { estado: "Espírito Santo", capital: "Vitória" },
  { estado: "Goiás", capital: "Goiânia" },
  { estado: "Maranhão", capital: "São Luís" },
  { estado: "Mato Grosso", capital: "Cuiabá" },
  { estado: "Mato Grosso do Sul", capital: "Campo Grande" },
  { estado: "Minas Gerais", capital: "Belo Horizonte" },
  { estado: "Pará", capital: "Belém" },
  { estado: "Paraíba", capital: "João Pessoa" },
  { estado: "Paraná", capital: "Curitiba" },
  { estado: "Pernambuco", capital: "Recife" },
  { estado: "Piauí", capital: "Teresina" },
  { estado: "Rio de Janeiro", capital: "Rio de Janeiro" },
  { estado: "Rio Grande do Norte", capital: "Natal" },
  { estado: "Rio Grande do Sul", capital: "Porto Alegre" },
  { estado: "Rondônia", capital: "Porto Velho" },
  { estado: "Roraima", capital: "Boa Vista" },
  { estado: "Santa Catarina", capital: "Florianópolis" },
  { estado: "São Paulo", capital: "São Paulo" },
  { estado: "Sergipe", capital: "Aracaju" },
  { estado: "Tocantins", capital: "Palmas" },
];

function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function buscar() {
  const buscaInput = removerAcentos(inputBuscar.value.toLowerCase().trim());

  const estadoEncontrado = estadosBrasil.find((item) => {
    const estadoSemAcento = removerAcentos(item.estado.toLowerCase());
    const capitalSemAcento = removerAcentos(item.capital.toLowerCase());

    return (
      estadoSemAcento.includes(buscaInput) ||
      capitalSemAcento.includes(buscaInput)
    );
  });

  if (estadoEncontrado) {
    
    resultado.innerHTML = `
     
      Estado: ${estadoEncontrado.estado} <br><br>
      Capital: ${estadoEncontrado.capital}
    `;
  } else {
    resultado.innerHTML = "Estado não encontrado!";
  }
}
buttonPesquisar.addEventListener("click", buscar);
inputBuscar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscar();
});

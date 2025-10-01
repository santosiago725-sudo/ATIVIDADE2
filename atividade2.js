const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

const primeiroUsuario = usuarios[0];
const nomePrimeiro = primeiroUsuario.nome;
const cidadePrimeiro = primeiroUsuario.cidade;
console.log("Nome:", nomePrimeiro);
console.log("Cidade:", cidadePrimeiro);

const novoUsuario = {
  nome: "Ana",
  idade: 30,
  email: "ana@exemplo.com",
  cidade: "Manaus",
  interesses: ["Natureza", "Culinária"]
};
const usuariosDoNorte = [...usuarios, novoUsuario];
console.log("usuariosDoNorte:", usuariosDoNorte);

const beatrizAtualizada = { ...usuarios[1], email: "bia.dev@exemplo.com" };
console.log("beatrizAtualizada:", beatrizAtualizada);

function mostrarInteresses(usuario) {
  if (!usuario || typeof usuario !== "object") {
    console.log("Usuário inválido");
    return;
  }
  const nome = usuario.nome;
  const interesses = Array.isArray(usuario.interesses) ? usuario.interesses : [];
  console.log(`${nome} tem interesse em: ${interesses.join(", ")}`);
}
console.log("interesses:");
mostrarInteresses(usuarios[0]);
mostrarInteresses(usuarios[1]);
mostrarInteresses(novoUsuario);
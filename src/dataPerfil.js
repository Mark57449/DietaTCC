var peso = 61;
var altura = 1.65;
var idade = 17;

var IMC = (peso / (altura * altura)).toFixed(2);

function status(_IMC){
	var status = "";

	if (_IMC < 17) {
		status = "Muito Abaixo do Peso";
	} else if (_IMC >= 17 && _IMC <= 18.49) {
		status = "Abaixo do Peso";
	} else if (_IMC >= 18.50 && _IMC <= 24.99) {
		status = "Peso Normal";
	} else if (_IMC >= 25 && _IMC <= 29.99) {
		status = "Acima do Peso";
	} else if (_IMC >= 30 && _IMC <= 34.99) {
		status = "Obesidade I";
	} else if (_IMC >= 35 && _IMC <= 39.99) {
		status = "Obesidade II (severa)";
	} else {
		status = "Obesidade III (mórbida)";
	}

	return status;
};

var X = status(IMC);

export default [
	{
		id: 1,
		nomeInformacao: "Peso",
		valor: peso + "kg",
		icone: "BlaBlaBla",
	},
	{
		id: 2,
		nomeInformacao: "Altura",
		valor: altura + "cm",
		icone: "BlaBlaBla",
	},
	{
		id: 3,
		nomeInformacao: "Idade",
		valor: idade,
		medida: "Anos",
		icone: "BlaBlaBla",
	},
	{
		id: 4,
		nomeInformacao: "Sexo",
		valor: "M",
	},
	{
		id: 5,
		nomeInformacao: "IMC",
		valor: IMC,
		status: " - " + X,
		icone: "BlaBlaBla",
	},
]
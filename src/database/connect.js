const mongoose = require('mongoose');

async function connectToDatabase() {
  const uri = 'mongodb+srv://viniciusjosepereira:RhVVXuX3XQZ6DGng@cursonodejsdicasparadev.0kairfv.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodejsDicasparaDevs';
  
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados', error);
    process.exit(1); // Finaliza o processo em caso de erro
  }
}

module.exports = connectToDatabase;
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://kyawzinhtun7415:${password}@cluster0.kgi8kgj.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

// Define schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

// How noteObject will be stored in database
const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'HTML is Difficult',
//   important: false,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// find all notes
Note.find({ important: false}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
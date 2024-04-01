const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SemesterSubjectSchema = new Schema({
  subjects: {
    type: [String],
    required: true
  }
});

const BranchSchema = Schema({
  branch: {
    type: String,
    required: true
  },
  sem: {
    type: {
      type: Map,
      of: SemesterSubjectSchema
    }
  }
})

const Branch = mongoose.model('Branch', BranchSchema);

module.exports = Branch;
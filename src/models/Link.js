import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
  tree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tree',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  url: {
    type: String,
    required: [true, 'Please provide a URL'],
    match: [
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      'Please provide a valid URL'
    ]
  },
  icon: {
    type: String,
    default: 'link'
  },
  position: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Link || mongoose.model('Link', LinkSchema);

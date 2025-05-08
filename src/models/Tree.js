import mongoose from 'mongoose';

const TreeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [50, 'Title cannot be more than 50 characters']
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
    match: [
      /^[a-zA-Z0-9-_]+$/,
      'Slug can only contain letters, numbers, hyphens, and underscores'
    ]
  },
  description: {
    type: String,
    maxlength: [160, 'Description cannot be more than 160 characters'],
    default: ''
  },
  theme: {
    type: String,
    enum: ['default', 'dark', 'light', 'neon', 'minimal'],
    default: 'default'
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  },
  textColor: {
    type: String,
    default: '#000000'
  },
  buttonColor: {
    type: String,
    default: '#3b82f6'
  },
  buttonTextColor: {
    type: String,
    default: '#ffffff'
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  views: {
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

export default mongoose.models.Tree || mongoose.model('Tree', TreeSchema);

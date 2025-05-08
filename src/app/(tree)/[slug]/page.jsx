import { notFound } from 'next/navigation';
import dbConnect from '@/lib/db/mongoose';
import Tree from '@/models/Tree';
import Link from '@/models/Link';
import User from '@/models/User';
import TreePage from './TreePage';

export async function generateMetadata({ params }) {
  // Ensure params is properly awaited
  const slug = params?.slug;
  const tree = await getTree(slug);

  if (!tree) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${tree.title} | OpenTree`,
    description: tree.description || `Check out ${tree.title} on OpenTree`,
  };
}

async function getTree(slug) {
  await dbConnect();

  try {
    const tree = await Tree.findOne({ slug, isPublished: true });

    if (!tree) {
      return null;
    }

    // Increment view count
    tree.views += 1;
    await tree.save();

    return JSON.parse(JSON.stringify(tree));
  } catch (error) {
    console.error('Error fetching tree:', error);
    return null;
  }
}

async function getLinks(treeId) {
  await dbConnect();

  try {
    const links = await Link.find({ tree: treeId, isActive: true }).sort({ position: 1 });
    return JSON.parse(JSON.stringify(links));
  } catch (error) {
    console.error('Error fetching links:', error);
    return [];
  }
}

async function getOwner(ownerId) {
  await dbConnect();

  try {
    const owner = await User.findById(ownerId);

    if (!owner) {
      return null;
    }

    return {
      name: owner.name,
      image: owner.image,
      bio: owner.bio,
    };
  } catch (error) {
    console.error('Error fetching owner:', error);
    return null;
  }
}

export default async function TreePageWrapper({ params }) {
  // Ensure params is properly awaited
  const slug = params?.slug;
  const tree = await getTree(slug);

  if (!tree) {
    notFound();
  }

  const links = await getLinks(tree._id);
  const owner = await getOwner(tree.owner);

  return (
    <TreePage tree={tree} links={links} owner={owner} />
  );
}

import { promisify } from 'util';
import { readFile } from 'fs';
import { Router } from 'express';
const router = Router();

const readFileAsync = promisify(readFile);

async function readList() {

  const file = await readFileAsync('videos.json');
  const json = JSON.parse(file);
  return json;
}

async function list(req, res, next) {
  const title = 'Myndband';
  const json = await readList();
  const { videos } = json;

  res.render('videos', { title, videos });
  return next();
}

async function video(req, res, next) {
  const { id } = req.params;

  const json = await readList();
  const { videos } = json;

  const foundVideo = videos.find(a => a.id === id);

  if (!foundVideo) {
    return next();
  }

  const { title } = foundVideo;

  return res.render('video', { title, video: foundVideo });
}

module.exports = videos;

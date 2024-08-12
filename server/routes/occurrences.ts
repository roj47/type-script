import { Router } from 'express';
import Occurrence from '../models/Occurrence';

const router: Router = Router();

router.get('/', async (req, res) => {
  const occurrences = await Occurrence.find();
  res.json(occurrences);
});

router.post('/', async (req, res) => {
  const newOccurrence = new Occurrence(req.body);
  await newOccurrence.save();
  res.json(newOccurrence);
});

export default router;

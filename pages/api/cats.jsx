import { postAddCat } from '../../lib/api'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const requestData = req.body
      const result = await postAddCat(
        process.env.FLASK_API_URL,
        requestData,
        process.env.FLASK_API_KEY
      )
      res.status(201).json(result)
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).end()
  }
}

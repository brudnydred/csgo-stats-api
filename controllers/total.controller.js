import Total from './../models/total.model'

const findAll = async (req, res) => {
  try {
    const totals = await Total.find()
    res.json(totals).status(200)
  } catch (error) {
    res.status(500).json(error)
  }
}

const findLast = async (req, res) => {
  try {
    const totals = await Total.find()
    res.status(200).json(totals[totals.length - 1])    
  } catch (error) {
    res.status(500).json(error)
  }
}

const create = async (req, res) => {
  const { matches, maps, rounds, players } = req.body

  if (!matches || !maps || !rounds || !players) {
    res.status(400).json('error')
    return
  }

  const total = new Total({
    matches, 
    maps, 
    rounds,
    players
  })

  try {
    await total.save()
    res.status(200).json('Document created')
  } catch (error) {
    res.status(500).json(error)
  }
}

// const updateOne = async (req, res) => {

// } 

// const deleteOne = async (req, res) => {

// }

export default {
  findAll,
  create,
  findLast,
}
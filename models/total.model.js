import { Schema, model } from 'mongoose'

const totalSchema = new Schema({
  matches: {
    total: Number,
    wins: Number, 
    loses: Number, 
    ties: Number,
  },
  maps: [{
    name: String, 
    total: Number, 
    wins: Number, 
    loses: Number, 
    ties: Number,
  }],
  rounds: {
    total: Number,
    won: Number,
    lost: Number,
  },
  players: [{
    steamId: String,
    name: String,
    stats: {
      kills: Number,
      assists: Number, 
      deaths: Number,
      headShotKills: Number,
      damage: Number,
      threeK: Number,
      fourK: Number,
      fiveK: Number,
      mvps: Number,
      hsp: Number,
      kd: Number,
      adr: Number,
    }
  }]
})

export default model('Total', totalSchema, 'totals')
import { Schema, model } from 'mongoose'

const matchSchema = new Schema({
  id: Number,
  info: {
    map: String, 
    rounds: Number,
    score: [Number]
  },
  scoreBoard: [{
    name: String, 
    steamId: String,
    kills: Number, 
    assists: Number, 
    deaths: Number,
    headShotKills: Number, 
    damage: Number, 
    threeK: Number,
    fourK: Number,
    fiveK: Number,
    kd: Number,
    adr: Number,
    hsp: Number, 
    mvps: Number,
    score: Number, 
  }]
})

export default model('Match', matchSchema, 'matches')
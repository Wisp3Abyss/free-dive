/* 0.5.7 2021-12-27 16:37:09 */
var app=new function(){this.name="Alpha",this.version="1",this.date="2009",this.folder="asset-v1/",this.looptime=4807,this.bpm=100,this.totalframe=232,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#121212",this.col0="#919191",this.col1="#5f5f5f",this.col2="#4b4b4b",this.col3="#373737",this.col4="#232323",this.animearray=[{name:"1_Logan",color:"828282",uniqsnd:!0},{name:"2_Trick",color:"828282",uniqsnd:!0},{name:"3_Crate",color:"828282",uniqsnd:!0},{name:"4_Drop",color:"828282",uniqsnd:!0},{name:"5_Radar",color:"828282",uniqsnd:!0},{name:"6_Moogy",color:"828282",uniqsnd:!0},{name:"7_Alert",color:"828282",uniqsnd:!1},{name:"8_Crash",color:"828282",uniqsnd:!0},{name:"9_Mikhalyov",color:"828282",uniqsnd:!1},{name:"10_Siren",color:"828282",uniqsnd:!0},{name:"11_Fall",color:"828282",uniqsnd:!1},{name:"12_Gameboy",color:"828282",uniqsnd:!0},{name:"13_Inked",color:"828282",uniqsnd:!0},{name:"14_pouin",color:"828282",uniqsnd:!0},{name:"15_tung",color:"828282",uniqsnd:!0},{name:"16_Minecf",color:"828282",uniqsnd:!0},{name:"17_hum",color:"828282",uniqsnd:!0},{name:"18_get",color:"828282",uniqsnd:!0},{name:"19_tellme",color:"828282",uniqsnd:!0},{name:"20_make",color:"828282",uniqsnd:!0}],this.bonusarray=[/*No bonuses?*/];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
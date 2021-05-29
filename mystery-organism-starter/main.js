// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequirFactory = (number, DNA) => {
  return{
    specimenNum: number,
    dna: DNA,
    mutate(){
      let randomNum = Math.floor(Math.random() * 15);
      DNA[randomNum] = returnRandBase(); 
    },
    compareDNA(obj){
      let i = 0;
      let count = 0;
      obj.dna.forEach(base => {
        if(base == this.dna[i++]){
          count++;
        }
      });
      let percentageEqual = (count / 15) * 100;
      //console.log(this.dna);
      //console.log(obj.dna);
      console.log(`Percentage Similarity: ${percentageEqual}%`);
    },
    willLikelySurvive(){
      let count = 0;
      this.dna.forEach(base => {
        if(base == 'C' || base == 'G')
          count++;
      });
      let percentageLikely = (count / 15) * 100;
      if(percentageLikely >= 60)
        return true;
      else
        return false;
    }
  }
} 


let PAequors = [];

for(let j = 1;j < 31;j++){
  PAequors[j-1] = pAequirFactory(j, mockUpStrand()); 
}

for(let i = 0;i < 30;i++){
  console.log(`Specimen: ${PAequors[i].specimenNum} \nDNA: ${PAequors[i].dna}\n-------------------------`); 
}
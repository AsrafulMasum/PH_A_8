
const getLSIds = () => {
  const storedLSData = localStorage.getItem('donationId');
  if(storedLSData){
    return JSON.parse(storedLSData)
  }
  return []
}

const handleSaveToLS = (id) => {
  const storedLSData = getLSIds()
  const isExists = storedLSData.find(donationId => donationId === id)
  if(!isExists){
    storedLSData.push(id)
    localStorage.setItem('donationId', JSON.stringify(storedLSData))
  }
}


export {handleSaveToLS, getLSIds}
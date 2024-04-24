async function getMunicipiosData(name) {
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios/${UF}`)
  
      const jsonData = await data.json()
  
      generateInfoSection(jsonData.sprites.front_default, name)
    } catch (error) {
      console.error(error)
    }
  }
  
  function getSearchParams() {
    if (!location.search) {
      return
    }
    const urlSearchParams = new URLSearchParams(location.search)
    const municipiosName = urlSearchParams.get('UF')
  
    changePageTitle(`Municipios ${UF}`)
    getMunicipiosData(UF)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
  })
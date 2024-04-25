async function getEstados(UF) {
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados${UF}`)
  
      const jsonData = await data.json()
  
      generateInfoSection(jsonData.sprites, name)
    } catch (error) {
      console.error(error)
    }
  }
  
  function getSearchParams() {
    if (!location.search) {
      return
    }
    const urlSearchParams = new URLSearchParams(location.search)

    const estadosUF = urlSearchParams.get('UF')
  
    changePageTitle(`Pagina do ${estadosUF}`)
    getestadosUF(estadosUF)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
  })
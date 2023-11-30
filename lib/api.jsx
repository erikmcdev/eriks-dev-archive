const apiUrl = process.env.FLASK_API_URL

async function makeApiCall(request, options = {}) {
  try {
    const headers = {
      ...options.headers
    }
    if (!headers['Api-Key']) {
      headers['Api-Key'] = 'fQoLYd6nytrB-iYyUBJLtEjJexeXe99Htl5eegBOdJg'
    }
    const response = await fetch(request, { ...options, headers })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (err) {
    throw err
  }
}

export async function getHouses() {
  const response = await makeApiCall(`${apiUrl}/houses`)
  return response
}
export async function getCatsByHouseId(houseId) {
  const response = await makeApiCall(`${apiUrl}/cats?house_id=${houseId}`)
  return response
}
export async function postAddCat(baseUrl, request) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': 'fQoLYd6nytrB-iYyUBJLtEjJexeXe99Htl5eegBOdJg'
    },
    body: JSON.stringify({
      name: request.name,
      birthdate: request.birthdate,
      nature: request.nature,
      house_id: request.houseId
    })
  }
  const response = await makeApiCall(`${baseUrl}/add_cat`, options)
  return response
}

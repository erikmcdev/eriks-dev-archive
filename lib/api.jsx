export async function getCatsByHouseId(houseId) {
  const response = await fetch(`http://localhost:5005/cats?house_id=${houseId}`)
  const data = await response.json()

  return data
}
export async function postAddCat(request, house_id) {
  try {
    const response = await fetch('http://localhost:5005/add_cat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: request.name,
        birthdate: request.birthdate,
        nature: parseInt(request.nature, 10),
        destination_id: house_id
      })
    })

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

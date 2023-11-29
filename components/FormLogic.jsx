import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    nature: ''
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    birthdate: '',
    nature: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toast = useToast()
  const router = useRouter()

  useEffect(() => {
    // You can now safely use the toast here or other client-side-only features
    // This effect runs only on the client side after the initial render
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    if (!formData.birthdate) {
      errors.birthdate = 'Birthdate is required'
    }
    if (!formData.nature) {
      errors.nature = 'Nature is required'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        const { id } = router.query
        formData.houseId = id
        const response = await fetch('/api/cats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        if (response.status !== 201) {
          const message = await response.json()
          throw new Error(message)
        }
        toast({
          title: 'Cat added successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
        setFormData({
          name: '',
          birthdate: '',
          nature: ''
        })
        router.replace(router.asPath)
      } catch (error) {
        toast({
          title: 'Error while adding cat',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return {
    formData,
    formErrors,
    isSubmitting,
    handleInputChange,
    handleSubmit
  }
}

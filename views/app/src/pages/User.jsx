import React from 'react'
import Layout from '../components/Layout'
import { Navigate, useParams } from 'react-router-dom'

export default function User(props) {
    const {id} = useParams()
    if(!id.startsWith("@")) {
        return <Navigate to="/not_found" replace />
    }
  return (
    <Layout>
        User
    </Layout>
  )
}


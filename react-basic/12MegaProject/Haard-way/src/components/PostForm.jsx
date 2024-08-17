import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {Button, RTE, Input, Select} from "../components/index"
import appwriteService from "../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm( {post} ) {
  const { register, handleSubmit, watch, setValue, control, getValues,  } = useForm({
    defaultValues:{
      title : post?.title || "",
      slug : post?.slug || "",
      status : post?.status || "active",
    }
  })

  const navigate = useNavigate()
  const userData = useSelector( state => state.user.userData )

  const submit = async (data) => {
    if(post){
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
    }

    if(file){
      appwriteService.deleteFile(post.featuredimage)
    }

    const dbPost = await appwriteService.updatePost(
      post.$id, {
        ...data,
        featuredImage : file ? file.$id : undefined
      }
    )

    if(dbPost) {
      navigate(`/post/${dbPost.$id}`)
    }
    else{
      const file = await appwriteService.uploadFile(data.image[0])     // uplaod file first

      if(file){
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.id,
        })
      }
      if(dbPost){
        navigate(`/post/${dbPost.$id}`)
      }
      
    }

  }

  

  return (
    <div>PostForm</div>
  )
}

export default PostForm
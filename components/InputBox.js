import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import { db, storage } from "../firebase";
import * as firebase from "firebase/app"
import { collection, addDoc } from "firebase/firestore";

const InputBox = () => {
  const { data: session } = useSession();
    const inputRef = useRef(null)
    const firePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)

  const  sendPost = async(e) => {
    e.preventDefault();
    
    const colRef = collection(db, "posts")

    if(!inputRef.current.value) return
    await addDoc(colRef, {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore?.FieldValue.serverTimestamp() ||  null
    }).then( doc => {
        if(imageToPost){
            const uploadTask = storage.ref(`/post/${doc.id}`).putString(imageToPost, 'data_url')

            removeImage()

            uploadTask.on('state_change', null, error => console.error(error), () => {
               // when upload completes
               storage.ref('posts').child(doc.id).getDownloadUrl.then(url => {
                   db.collection('posts').doc(doc.id).set({
                       postImage: url
                   }, { merge: true})
               })
            })
        }
    })

    inputRef.current.value = ''
  };

  const addImageToPost = (e) => {
    const reader = new FileReader()

    if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
        setImageToPost(readerEvent.target.result)
    }
  };

  const removeImage = () => {
      setImageToPost(null)
  }
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 mt-6">
      <div className="flex space-x-2 p-4 items-center font-medium">
        <Image
          width={40}
          height={40}
          src={session.user.image}
          className="rounded-full absolute top-10 opacity-0 lg:opacity-100 z-10"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder={`What's on your mind ${session.user.name}?`}
            className="rounded-full h-12 focus:outline-none
          bg-gray-100 px-5 flex-grow"
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        
        {imageToPost && (
            <div onClick={removeImage} className='flex h-10 flex-col filter hover:backdrop-brightness-110
            transition duration-150 transform hover:scale-105 cursor-pointer '>
            <img className="object-contain h-10" src={imageToPost} alt="post" />
            <p className="text-red-500 text-center">remove</p>
            </div>
        )}
        {/* <img src={imageToPost} alt="" /> */}
        
      </div>
      <div className="flex items-center justify-evenly space-x-2 p-3 border-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500" />
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
            <div className="inputIcon" onClick={() => firePickerRef.current.click()}>
                <CameraIcon className="h-7 text-green-400" />
                <p className="text-xs sm:text-sm xl:text-base">Phot/Video</p>
                <input ref={firePickerRef} hidden type="file" onChange={addImageToPost} />
            </div>
            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300" />
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
            </div>
        </div>
    </div>
  );
};

export default InputBox;

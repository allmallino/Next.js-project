'use client'
import ImageScroller from './ImageScroller/ImageScroller'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import firebase_app from '@/firebase/config'
import { collection, getFirestore } from "firebase/firestore"

export default function Thumbnails() {
    const [thumbnails, thumbnailsLoading, thumbnailsError] = useCollectionOnce(collection(getFirestore(firebase_app), "thumbnails"));

    if (!thumbnailsLoading && thumbnails) {
        return <ImageScroller childList={thumbnails.docs.map((v) => { return { key: v['_document'].key.path.segments[v['_document'].key.path.segments.length - 1], ...v.data() }; })} />;
    }
}
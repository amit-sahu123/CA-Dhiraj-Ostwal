import { useQuery } from '@tanstack/react-query'
import {QUERY_KEYS} from './queryKeys'
import { useMutation } from '@tanstack/react-query';

import { getYoutubeLinks,
    contactUs,
    sendResume,
    getAllBanner,
    getAdminProfileById,
    getAllEmployee,
    saveMeeting,
 } from '../appwrite/api'


 
// CONTACT US -- data send from the contact page
export const useContactUs = () => {
  return useMutation({
    mutationFn: (contact) => contactUs(contact),
  });
};
// SEND RESUME -- data send  from the4 career
export const useSendResume = () => {
    return useMutation({
      mutationFn: (resume) => sendResume(resume),
    })
  }

export const useGetAllYoutube = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_ALL_YOUTUBE_LINK],
      queryFn: getYoutubeLinks,
    })
  }

  // ===========Banner API
// ===========get banner
export const useGetAllBanner = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_ALL_BANNER],
      queryFn: getAllBanner,
    })
  }

  // Admin Profile Data
export const useGetAdminProfile= () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_ADMIN_PROFILE],
      queryFn: getAdminProfileById,
    })
  }

  // All Employee Data
export const useGetAllEmployee = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_ALL_EMPLOYEE],
      queryFn: getAllEmployee,
    })
  }
//   Admin Profile Data
// export const useGetAdminProfile= () => {
//     return useQuery({
//       queryKey: [QUERY_KEYS.GET_ADMIN_PROFILE],
//       queryFn: getAdminProfileById,
//     })
//   }

// Save MEETING
export const useSaveMeeting = () => {
    return useMutation({
      mutationFn: (meeting) => saveMeeting(meeting),
    })
  }
import { ID, Query } from 'appwrite'
import { appwriteConfig, account, databases, storage, avatars } from './config'
import { QUERY_KEYS } from '../react-query/queryKeys'

// -------------------------Contact Us
export async function contactUs(contact) {
    try {
      const savecontact = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.contactCollectionId,
        ID.unique(),
        {
          FirstName: contact.firstname,
          LastName: contact.lastname,
          Email: contact.email,
          Phone: contact.phone,
          Message: contact.message,
          SubmitDate: new Date().toISOString(),
          admin: '6673dfce000cb39229e0',
        }
      )
  
      if (!savecontact) {
        throw new Error('Failed to Contact Us')
      }
      return savecontact
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  // Get All YoutubeLinks
export async function getYoutubeLinks() {
    try {
      const links = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.youtubeCollectionId
      )
      if (!links) throw Error
      return links
    } catch (error) {
      console.log(error)
    }
  }

   // ============================== SEND RESUME
   export async function sendResume(resume) {
    try {
      if (!resume.file) {
        throw new Error('No file provided')
      }
      const uploadedFile = await uploadFile(resume.file)
      if (!uploadedFile) throw new Error('File upload failed')
  
      const fileUrl = getFilePreview(uploadedFile.$id)
      if (!fileUrl) {
        await deleteFile(uploadedFile.$id)
        throw new Error('Failed to get file preview')
      }
  
      // Send Resume
      const newResume = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.carerrCollectionId,
        ID.unique(),
        {
          Name: resume.name,
          Interest: resume.interest,
          ResumeUrl: fileUrl,
          ImageId: uploadedFile.$id,
          Email: resume.email,
          Phone: resume.tel, // Fixed field name to match form data
          SubmitDate: new Date().toISOString(),
          admin: '6673dfce000cb39229e0',
        }
      )
  
      if (!newResume) {
        await deleteFile(uploadedFile.$id)
        throw new Error('Failed to create document')
      }
  
      return newResume
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  // // ============================== UPLOAD FILE
  export async function uploadFile(file) {
    try {
      const uploadedFile = await storage.createFile(
        appwriteConfig.storageId,
        ID.unique(),
        file
      )
  
      return uploadedFile
    } catch (error) {
      console.log(error)
    }
  }
  
  // // ============================== GET FILE URL
  // ============================== GET FILE URL
  export function getFilePreview(fileId, ratioType = 'wide') {
    try {
      let width, height;
  
      if (ratioType === 'wide') {
        width = 4000;
        height = 4000;
      } else if (ratioType === 'portrait') {
        width = 1400;
        height = 2500;
      } else {
        width = 2048;
        height = 2000;
      }
  
      const fileUrl = storage.getFilePreview(
        appwriteConfig.storageId,
        fileId
      );
  
      if (!fileUrl) throw new Error('Failed to get file preview');
  
      return fileUrl;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  // // ============================== DELETE FILE
  export async function deleteFile(fileId) {
    try {
      await storage.deleteFile(appwriteConfig.storageId, fileId)
      return { status: 'ok' }
    } catch (error) {
      console.log(error)
    }
  }
  
  // Download RESUME
  export async function downloadResumeFiles(imageId) {
    try {
      const result = storage.getFileDownload(appwriteConfig.storageId, imageId)
      if (!result) throw Error
      return result
    } catch (error) {
      console.log(error)
    }
  }
  
  // All RESUME
  export async function getAllResumeFiles() {
    try {
      const allresume = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.carerrCollectionId
      )
      if (!allresume) throw Error
      return allresume
    } catch (error) {
      console.log(error)
    }
}


// All Banner Data
export async function getAllBanner() {
    try {
      const allBanner = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.bannerCollectionId
      )
      console.log(allBanner)
      if (!allBanner) throw Error
      return allBanner.documents
    } catch (error) {
      console.log(error)
    }
  }
// AdminProfileById
export async function getAdminProfileById() {
    try {
      const response = await databases.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.adminProfileCollectionId,
        '667e547d0023b802bafe'
      )
      return response
    } catch (error) {
      console.error('Failed to fetch sub-services:', error)
      throw new Error('Failed to fetch sub-services')
    }
  }
  // All Employee Data
export async function getAllEmployee() {
    try {
      const allEmployee = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.employeeCollectionId
      )
  
      console.log(allEmployee)
      if (!allEmployee) throw Error
      return allEmployee.documents
    } catch (error) {
      console.log(error)
    }
  }

  export async function saveMeeting(meeting) {
    try {
      const savemeeting = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.meetingsCollectionId,
        ID.unique(),
        {
          WhatsAppNumber: meeting.whatsappNumber,
          Subject: meeting.subject,
          DateTime: meeting.datetime,
          SubmitDate: new Date().toISOString(),
          admin: '6673dfce000cb39229e0',
        }
      )
      if (!savemeeting) {
        throw new Error('Failed to Book Meeting')
      }
      console.log(savemeeting)
      return savemeeting
    } catch (error) {
      console.error(error)
      throw error
    }
  }

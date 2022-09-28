import Env from '@ioc:Adonis/Core/Env'
import { driveConfig } from '@adonisjs/core/build/config'
import Application from '@ioc:Adonis/Core/Application'

export default driveConfig({
  disk: Env.get('DRIVE_DISK'),

  disks: {
    local: {
      driver: 'local',
      visibility: 'public',

      root: Application.tmpPath('uploads'),

      serveFiles: true,

      basePath: '/users/uploads',
    },

    /*
    |**************************************************************************
    | npm i @adonisjs/drive-s3
    |**************************************************************************
    |
    */
    // s3: {
    //   driver: 's3',
    //   visibility: 'public',
    //   key: Env.get('S3_KEY'),
    //   secret: Env.get('S3_SECRET'),
    //   region: Env.get('S3_REGION'),
    //   bucket: Env.get('S3_BUCKET'),
    //   endpoint: Env.get('S3_ENDPOINT'),
    //
    //  // For minio to work
    //  // forcePathStyle: true,
    // },

    /*
    |**************************************************************************
    | npm i @adonisjs/drive-gcs
    |**************************************************************************
    |
    */
    // gcs: {
    //   driver: 'gcs',
    //   visibility: 'public',
    //   keyFilename: Env.get('GCS_KEY_FILENAME'),
    //   bucket: Env.get('GCS_BUCKET'),
    // },
  },
})

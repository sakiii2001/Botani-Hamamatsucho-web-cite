'use client'

import { useEffect, useState } from 'react'
import { getSupabaseClient } from '@/lib/supabase'

export default function TestSupabasePage() {
  const [connection, setConnection] = useState<'testing' | 'connected' | 'error'>('testing')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await getSupabaseClient().from('_realtime_schema').select('*').limit(1)
        
        if (error) {
          // This is expected for most users, but it means Supabase is responding
          if (error.code === 'PGRST116' || error.message.includes('permission denied')) {
            setConnection('connected')
          } else {
            setConnection('error')
            setError(error.message)
          }
        } else {
          setConnection('connected')
        }
      } catch (err) {
        setConnection('error')
        setError(err instanceof Error ? err.message : 'Unknown error')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
          
          <div className="flex items-center space-x-3">
            {connection === 'testing' && (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-600">Testing connection...</span>
              </>
            )}
            
            {connection === 'connected' && (
              <>
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-green-600 font-medium">Connected to Supabase!</span>
              </>
            )}
            
            {connection === 'error' && (
              <>
                <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-red-600 font-medium">Connection failed</span>
              </>
            )}
          </div>
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-3">Configuration</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Supabase URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not configured'}</p>
            <p><strong>Anon Key:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Configured' : 'Not configured'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

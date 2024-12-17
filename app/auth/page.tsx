'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useNavbarTheme } from '../context/navbarContext'

const Auth = () => {
  const {theme, setTheme} = useNavbarTheme(); 
  useEffect(() => { 
    setTheme('otherPage');
  }, []);

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='w-[50%] flex items-center justify-center max-lg:hidden'>
        <Image src = '/auth_image.jpg' alt='auth image' width={700} height={1400} className='ml-[3rem] rounded-xl'></Image>
      </div>
      <div className='w-[50%] flex items-center justify-center h-full'>
      <Card className="w-[450px] h-[320px]">
      <CardHeader>
        <CardTitle>SIGN IN</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username or Email</Label>
              <Input id="name" placeholder="Username or Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input type='password' placeholder='Password'></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
      </div>
    </div>
  )
}

export default Auth
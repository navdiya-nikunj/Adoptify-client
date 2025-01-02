'use client';
import Image from 'next/image';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

const SignupPage: React.FC = () => {
  return (
    <div>
      <div className=" w-full pt-28 pb-4 flex items-center justify-center ">
        <div className="w-[80%] mx-auto py-16 flex flex-row-reverse pt-28 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-r from-blue-200 to-purple-200 z-10">
          <div className="hidden md:flex items-center justify-center w-1/2 h-full">
            <Image
              src={'/userRegistration/signupIllus.jpg'}
              className="rounded-lg w-full h-full"
              height={1000}
              width={1000}
              alt="Adoptify"
            />
          </div>
          <div className="w-1/2 px-4 flex flex-col items-center justify-center">
            <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
              Welcome to Adoptify !
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Create an account to continue.
            </p>
            <form
              className="my-8 w-full px-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <LabelInputContainer className="mb-4">
                <Label htmlFor="firstname">Username</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 234 567 890" type="tel" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="twitterpassword">Confirm password</Label>
                <Input
                  id="twitterpassword"
                  placeholder="••••••••"
                  type="twitterpassword"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign Up &rarr;
                <BottomGradient />
              </button>
            </form>
            <div className="flex items-center justify-center w-full">
              Already have an account ?{' '}
              <Link href="/signin">
                <span className="text-blue-600  ml-2 font-semibold">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default SignupPage;

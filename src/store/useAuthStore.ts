import axiosInstance from '@/utils/axios';
import { UserDataType } from '@/utils/types';
import toast from 'react-hot-toast';
import {create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        user: any;
        token: string | null;
        isAuthenticated: boolean;
        loading: boolean;
        login: (username: string, password: string) => Promise<void>;
        logout: () => void;
        register: (userData: UserDataType) => Promise<void>;
};

export const useAuthStore = create(
    persist(
    (set) => ({
      user: null, // Initially, no user is logged in
      token: null, // JWT or session token
      isAuthenticated: false, // Authentication status
      loading: false, // Loading state for async operations

      //register function
      register: async(userData:UserDataType)=>{
        set({ loading: true }); // Start loading
        console.log("userdatau",userData);
        try {
          const response = await axiosInstance.post('/api/users/register', userData);

          const data = await response.data;
          const { user, token } = data;
          console.log(data);
          localStorage.setItem('token', token);
          // Update the Zustand store
          set({
            user,
            token,
            isAuthenticated: true,
            loading: false, // Stop loading
          });
          toast.success("Registration Successful");
        } catch (error) {
          toast.error("Registration Failed");
          set({ loading: false }); // Stop loading
          console.error('Registration error:', error);
        }
      },

      // Login function
      login: async (username: string, password: string) => {
        set({ loading: true }); // Start loading
 
        try {
          const response = await axiosInstance.post('/api/users/login', {username,password});

          const data = await response.data;
          const { user, token } = data;
          localStorage.setItem('token', token);
          // Update the Zustand store
          set({
            user,
            token,
            isAuthenticated: true,
            loading: false, // Stop loading
          });
          toast.success("Login Successful");
        } catch (error) {
          toast.error("Login Failed");
          set({ loading: false }); // Stop loading
          console.error('Registration error:', error);
        }
      },

      // Logout function
      logout: () => {
        set({ loading: true }); // Start loading
        localStorage.removeItem('token');
        // Clear the user and token
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          loading: false, // Stop loading
        });
        console.log('Logged out successfully');
      },
    }),
    {
      name: 'auth-store', // Name of the storage (localStorage key) 
        partialize: (state: AuthState) => ({
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
      }), // Persist the loading state as well
    }
  )    
);
import React from 'react';

const SignupComponent = () => {
  return (
    <>
       <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-6">
          <div>
            <img
              className="mx-auto h-10 w-auto"
              src="../public/image/logo_2x-100-removebg-preview.png"
              alt="YFJ Logo"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Email address"
                />
              </div>
              {/* Add other sign-up fields here */}
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="contact" className="sr-only">
                  Contact
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  autoComplete="tel"
                  required
                  className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Contact"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="re-password" className="sr-only">
                  Re-enter Password
                </label>
                <input
                  id="re-password"
                  name="re-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                  placeholder="Re-enter Password"
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-5 text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-5">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold leading-5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* <p className="text-center text-sm leading-5 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default SignupComponent;

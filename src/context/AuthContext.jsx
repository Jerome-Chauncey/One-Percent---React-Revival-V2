import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const res = await fetch(
        "https://onepercentrevivalv2-users.onrender.com/users"
      );
      const users = await res.json();

      const user = users.find(
        (u) =>
          u.email.toLowerCase().trim() === email.toLowerCase().trim() &&
          u.password === password
      );

      if (user) {
        setUser({ email: user.email });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch(
        "https://onepercentrevivalv2-users.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      setUser({ email: data.email });
      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setUser(null);
  };

  const resetPassword = async (email) => {
    try {
      const response = await fetch("https://onepercentrevivalv2-users.onrender.com/password-reset-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Password reset request failed");
      }

      return { success: true };
    } catch (error) {
      console.error("Password reset request error:", error);
      return { success: false, message: error.message };
    }
  };

  const confirmResetPassword = async (token, newPassword) => {
    try {
      const response = await fetch("https://onepercentrevivalv2-users.onrender.com/password-reset-confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Password reset confirmation failed");
      }

      return { success: true };
    } catch (error) {
      console.error("Password reset confirmation error:", error);
      return { success: false, message: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, resetPassword, confirmResetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

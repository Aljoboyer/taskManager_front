export interface AuthErrorResponse {
  data: {
    message: string;
    emailErr?: unknown;
    phoneErr?: unknown;
    propertyErr?: unknown;
  };
}

export interface AuthErrorResult {
  field: string;
  typeObj: {
    type: "server";
    message: string;
  };
}

export const authErrorchecker = (response: AuthErrorResponse): AuthErrorResult | undefined => {
  const { message, emailErr, phoneErr, propertyErr } = response.data;

  const typeObj = {
    type: "server" as const,
    message,
  };

  if (emailErr) {
    return { field: "email", typeObj };
  }

  if (phoneErr) {
    return { field: "phone", typeObj };
  }

  if (propertyErr) {
    return { field: "propertyName", typeObj };
  }

  if (message === "User doesn't exist with this email") {
    return { field: "email", typeObj };
  }

  if (message === "Incorrect password") {
    return { field: "password", typeObj };
  }

  return undefined;
};

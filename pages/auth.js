import React from "react";
import Link from "next/link";
import {Button} from "react-bootstrap";

const auth = () => (
    <div>
        <Link href="/auth/google">
            <Button
                bsStyle="primary"
            >
                Connect with google
            </Button>
        </Link>
        <Link href="/auth/facebook">
            <Button
                bsStyle="primary"
            >
                Connect with facebook
            </Button>
        </Link>
    </div>
);

export default auth;
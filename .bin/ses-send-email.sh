#!/bin/bash 

set +e

# Declare an array to store if any attachments
attachments=()

# DEFAULTS
# sesAccess='AKIAXXXXXXXXXXXXXXXX' sesSecret='Bxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
sesFromName="Joe McJones"
# sesFromAddress="me@notmyrealemail.com"
sesToName="Mary McMary"
# sesToAddress="me@notmyrealemail.com"
sesSubject="Test Email from Script"
sesSMTP="email-smtp.eu-west-1.amazonaws.com"
sesPort="465"
sesMessage=$'Test of line 1\nTest of line 2'


while [ "$1" != "" ]; do
    case $1 in
    --ses-access)
        shift
        sesAccess="$1"
        ;;
    --from-name)
        shift
        sesFromName="$1"
        ;;
    --from-address)
        sesFromAddress=1
        ;;
    --to-name)
        shift
        sesToName="$1"
        ;;
    --to-address)
        shift
        sesToAddress="$1"
        ;;
    --subject)
        shift
        sesSubject="$1"
        ;;
    --server)
        shift
        sesSMTP="$1"
        ;;
    --port)
        shift
        sesPort="$1"
        ;;
    --message)
        shift
        sesMessage="$1"
        ;;
    --file)
        shift
        attachments+=("$1")
        ;;
    esac
    shift
done

COMMAND="curl -v --url smtps://$sesSMTP:$sesPort --ssl-reqd  \
--mail-from $sesFromAddress --mail-rcpt $sesToAddress  \
--user $sesAccess:$sesSecret -F '=(;type=multipart/mixed' \
-F \"=$sesMessage;type=text/plain\" \
-H \"Subject: $sesSubject\" \
-H \"From: $sesFromName <$sesFromAddress>\" \
-H \"To: $sesToName <$sesToAddress>\" "

if [ ${#attachments[@]} -gt 0 ]; then
    for attachment in "${attachments[@]}"; do
        echo "Attaching $attachment"
        COMMAND+="-F \"file=@$attachment;type=$(file --mime-type "$attachment" | sed 's/.*: //');encoder=base64\" "
    done
    COMMAND+=" -F '=)'"
else
  echo "Sending email without any attachments"
fi

echo ""
echo ""


echo "EXECUTING: "
echo ""
echo "$COMMAND"

echo ""
echo ""

echo "RESULT: "
echo ""
eval "$COMMAND"
